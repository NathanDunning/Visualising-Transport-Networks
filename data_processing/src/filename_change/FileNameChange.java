package filename_change;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class FileNameChange {
public static void main(String[] args) throws IOException {
	dirTree(new File(args[0]));
}

public static void dirTree(File dir) throws IOException {
	BufferedWriter bw = new BufferedWriter(new FileWriter(dir + "\\wel_car_from.csv"));
	boolean firstline = false;
    File[] subdirs=dir.listFiles();
    for(File subdir: subdirs) {
       if (subdir.isDirectory()) {
          dirTree(subdir);
       } else {
    	   if(firstline) {
    		   doFile(subdir, bw, true);
    		   firstline = false;
    	   } else {
    		   doFile(subdir, bw, false);
    	   }
       }
    }
    bw.close();
 }


public static void doFile(File file, BufferedWriter bw, boolean firstLine) throws IOException {
   String filePath = file.getAbsolutePath();
   String fileName = filePath.substring(filePath.lastIndexOf("\\")+1, filePath.length());
   String data = fileName.replace(".csv", "");
   System.out.println(filePath);
   BufferedReader br = new BufferedReader(new FileReader(filePath));
   String line;
   line = br.readLine();
   while((line = br.readLine()) != null) {
	   List<String> cols = new ArrayList();
	   cols.addAll(Arrays.asList(line.split("\\,")));
	   System.out.println(cols.get(0));
	   if(firstLine) {
		   cols.add("date");
		   bw.newLine();
		   firstLine = false;
	   }
	   else
		   cols.add(data);
	   bw.write(String.join(",",cols));
	   bw.newLine();
   }
   br.close();
}
}
