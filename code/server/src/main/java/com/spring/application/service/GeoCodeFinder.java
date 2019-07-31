package com.spring.application.service;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

@Service
@Component
public class GeoCodeFinder {

	@Value("${input.file.location}")
	private static String inputFile;
	@Value("${output.file.location}")
	private static String outputFile;
	@Value("${geocode.api.url}")
	private static String api;
	@Value("${geocode.api.key}")
	private static String apiKey;

	public static void main(String[] args) throws IOException, ParseException {
		System.out.println("Input : " + inputFile);
		System.out.println("Output : " + outputFile);
		System.out.println("API : " + api);
		System.out.println("Api key : " + apiKey);
		BufferedReader br = new BufferedReader(new FileReader(inputFile));
		BufferedWriter bw = new BufferedWriter(new FileWriter(outputFile));

		String line;

		while ((line = br.readLine()) != null) {
			String area = line.trim().replaceAll(" ", "%20");
			String url = String.format("%scountrycode=nz&q=%s&key=%s", api, area, apiKey);
			URL myurl = new URL(url);
			HttpURLConnection con = (HttpURLConnection) myurl.openConnection();
			con.setRequestMethod("GET");
			BufferedReader in = new BufferedReader(new InputStreamReader(con.getInputStream()));
			String response;
			StringBuilder responseBuilder = new StringBuilder();
			while ((response = in.readLine()) != null) {
				JSONParser parser = new JSONParser();
				JSONObject json = (JSONObject) parser.parse(response);
				int totalResults = Integer.parseInt(json.get("total_results").toString());
				if (totalResults > 0) {
					JSONArray jsonResults = (JSONArray) json.get("results");
					JSONObject jsonResult = (JSONObject) jsonResults.get(0);
					JSONObject jsonGeometry = (JSONObject) jsonResult.get("geometry");
					String lat = jsonGeometry.get("lat").toString();
					String lng = jsonGeometry.get("lng").toString();
					responseBuilder.append(area);
					responseBuilder.append("\t");
					responseBuilder.append(lat);
					responseBuilder.append("\t");
					responseBuilder.append(lng);
					responseBuilder.append(System.lineSeparator());
					bw.write(responseBuilder.toString());
				} else {
					responseBuilder.append(area);
					responseBuilder.append(System.lineSeparator());
					bw.write(responseBuilder.toString());
				}
			}
			in.close();
			con.disconnect();
		}
		bw.close();
		br.close();
		System.out.println("Process Completed");
	}

}
