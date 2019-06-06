package com.spring.application;

import org.junit.Test;

@ExtendWith(MockitoExtension.class)
public class LoginUserTest {
	@Mock
	private UserRepository userRepository;

	private RegisterUseCase registerUseCase;

	@BeforeEach
	void initUseCase() {
		registerUseCase = new RegisterUseCase(userRepository);
	}

	@Test
	void savedUserHasRegistrationDate() {
		// ...
	}
}
