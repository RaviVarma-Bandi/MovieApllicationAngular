package com.example.dao;

import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import com.example.entities.UserModel;

@Repository
@EnableJpaRepositories
@SpringBootApplication
public interface UserModelDao extends JpaRepository<UserModel, String>{
//UserRepository
	UserModel findByUsername(String username);

	UserModel findByEmail(String username);

    public UserModel findByEmailAndPassword(String email, String password);
    UserModel getUserByActive(Boolean active);
    
}
