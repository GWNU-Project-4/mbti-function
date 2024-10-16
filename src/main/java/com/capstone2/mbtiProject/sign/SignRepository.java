package com.capstone2.mbtiProject.sign;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SignRepository  extends JpaRepository<Member, String> {
}
