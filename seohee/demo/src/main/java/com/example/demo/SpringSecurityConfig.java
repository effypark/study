package com.example.demo;

import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;

@Configuration
@EnableWebSecurity

public class SpringSecurityConfig extends WebSecurityConfigurerAdapter {
    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.authorizeRequests()
                    .anyRequest().authenticated()
                .and()
                    .formLogin()
                    .defaultSuccessUrl("/dashboard", true)
                    .permitAll()
                .and()
                    .logout();
    }
    @Override
    public void configure(WebSecurity web) throws Exception {
        // 예외처리 해줄 커스텀 페이지들
        // web.ignoring().antMatchers("/static/js/**","/static/css/**","/static/img/**","/static/frontend/**");
    }
}



//A. '.anyRequest().authenticated()'에서 어떠한 URI로 접근하던지 인증이 필요함을 설정
//B. 'formLogin()'에서 폼방식 로그인을 사용할 것임을 알리고, logout도 필요하니 logout도 추가
//C. 'defaultSuccessUrl'로 로그인 성공 시 이동할 uri 작성