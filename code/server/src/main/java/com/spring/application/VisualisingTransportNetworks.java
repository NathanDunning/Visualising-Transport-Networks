package com.spring.application;

import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

import com.spring.application.model.Role;
import com.spring.application.model.User;
import com.spring.application.repository.UserRepository;
import com.spring.application.service.UserService;


@SpringBootApplication
@EnableJpaRepositories(basePackages = {"com.spring.application.repository"})
@Configuration
public class VisualisingTransportNetworks
{
	@Autowired
	private UserService userService;
	
	public static void main(String[] args) {

		SpringApplication.run(VisualisingTransportNetworks.class, args);
	}
	
	@Bean
	public CommandLineRunner demo(UserRepository repository) {
		return (args) -> {
			Role role = new Role("ADMIN");
			Set<Role> roles = new HashSet<Role>();
			roles.add(role);
			User user = new User("project7", "12345", roles);
			User existing = userService.findByEmail("project7");
			if(existing == null){
				userService.save(user,false);
			}
		};
	}
	
	@Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurerAdapter() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/**").allowedOrigins("*");
            }
        };
    }
}
