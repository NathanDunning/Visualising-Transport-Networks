package com.spring.application.security;

import java.io.IOException;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;


import java.util.Arrays;
import java.util.HashSet;

public class AuthorizationFilter implements Filter {

    private static final Logger LOGGER = LoggerFactory.getLogger(AuthorizationFilter.class);

    private final HashSet<String> allowedOrigins;

    public AuthorizationFilter(String[] allowedOrigins) {
        super();
        this.allowedOrigins = new HashSet<>(Arrays.asList(allowedOrigins));
    }

    @Override
    public void destroy() {
        LOGGER.debug("Security filter destroyed");
    }

    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
            throws IOException, ServletException {
        HttpServletRequest httpRequest = (HttpServletRequest) request;

        HttpServletResponse httpResponse = (HttpServletResponse) response;

        httpResponse.setHeader("x-frame-options", "SAMEORIGIN");
        httpResponse.setHeader("Cache-Control", "no-store, no-cache, must-revalidate, proxy-revalidate, private");
        httpResponse.setHeader("Pragma", "no-cache");
        httpResponse.setHeader("x-xss-protection", "1; mode=block");
        httpResponse.setHeader("x-content-type-options", "nosniff");
        httpResponse.setHeader("expires", "0");

        // add headers to support CORS
        String origin = httpRequest.getHeader("origin");
        String originToAllow = null;
        if (allowedOrigins.contains("*")) {
            originToAllow = "*";
        } else if (origin != null && allowedOrigins.contains(origin)) {
            originToAllow = origin;
        }
        if (originToAllow != null) {
            httpResponse.setHeader("Access-Control-Allow-Origin", originToAllow);
            httpResponse.setHeader("access-control-allow-credentials", "true");
            httpResponse.setHeader("access-control-allow-headers", "X-Requested-With, Authorization, Content-Type");
            httpResponse.setHeader("access-control-allow-methods", "GET, POST, OPTIONS, PUT, PATCH");
        }

        if (httpRequest.getMethod().equalsIgnoreCase("OPTIONS")) {
            LOGGER.debug("Received CORS preflight request from {}", origin);
            LOGGER.debug("Allowing origin - {}", originToAllow);
            return;
        }

        chain.doFilter(request, response);

    }

    @Override
    public void init(FilterConfig config) throws ServletException {
        LOGGER.debug("Security filter initialized");
    }
}