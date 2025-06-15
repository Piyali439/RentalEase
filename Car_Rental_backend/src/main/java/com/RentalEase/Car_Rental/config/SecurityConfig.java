package com.RentalEase.Car_Rental.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {

    @Bean
    public InMemoryUserDetailsManager userDetailsService(PasswordEncoder encoder){
        UserDetails user1 = User.withUsername("user")
                                .password(encoder.encode("password"))
                                .roles("USER")
                                .build();

        UserDetails admin = User.withUsername("admin")
                                .password(encoder.encode("adminpass"))
                                .roles("ADMIN")
                                .build();

        return new InMemoryUserDetailsManager(user1, admin);

    }

    @Bean
    public PasswordEncoder passwordEncoder(){
        return new BCryptPasswordEncoder();
    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http 
            .csrf(csrf -> csrf.disable())
            .authorizeHttpRequests(auth -> auth
            // .requestMatchers("/h2-console/**").permitAll()
            .requestMatchers("/api/**").authenticated()
            .anyRequest().permitAll()
            )
            .httpBasic(Customizer.withDefaults());

        return http.build();
    }
    
}
