package com.spring.example;

import java.util.HashSet;
import java.util.Set;

import com.spring.example.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

import com.spring.example.model.Role;
import com.spring.example.model.User;
import com.spring.example.repository.UserRepository;



@SpringBootApplication
@Configuration
public class App 
{
	@Autowired
	private UserService userService;
	
	public static void main(String[] args) {

		SpringApplication.run(App.class, args);
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
                registry.addMapping("/*").allowedOrigins("http://localhost:8081");
            }
        };
    }
}
