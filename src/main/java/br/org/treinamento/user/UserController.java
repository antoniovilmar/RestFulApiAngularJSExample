package br.org.treinamento.user;

import java.util.ArrayList;
import java.util.List;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

@Controller
@EnableAutoConfiguration
public class UserController {

	private List<User> userList = new ArrayList<User>();

	public UserController() {
		userList.add(new User(1, "Danilo", "Fernandes"));
		userList.add(new User(2, "Wanderson", "Oliveira"));
		userList.add(new User(3, "Anderson", "Oliveira"));
		userList.add(new User(4, "Alex", "Meschini"));
		userList.add(new User(5, "Victor", "Santos"));
		userList.add(new User(6, "Eduardo", "Sasha"));
		userList.add(new User(7, "Andrigo", "Araújo"));
		userList.add(new User(8, "William", "Furtado"));
		userList.add(new User(9, "Andrigo", "Araújo"));
		userList.add(new User(10, "Paulo", "Ribeiro"));
		userList.add(new User(11, "Rodrigo", "Dourado"));
		userList.add(new User(12, "Fernando", "Silva"));
		userList.add(new User(13, "Aylon", "Tavella"));
		userList.add(new User(14, "Gustavo", "Ferrareis"));
		userList.add(new User(15, "Fabio", "Gonçalves"));
		userList.add(new User(16, "Alisson", "Becker"));
	}

	@RequestMapping(value = "/user/", method = RequestMethod.GET)
	@ResponseBody
	public List<User> getUsers() {
		return userList;
	}

	@RequestMapping(value = "/user/{id}", method = RequestMethod.GET)
	@ResponseBody
	public User getUser(@PathVariable("id") Integer id) {
		return userList.stream().filter(u -> u.getId() == id).findFirst()
				.orElseThrow(() -> new HttpClientErrorException((HttpStatus.NOT_FOUND)));
	}

	@RequestMapping(value = "/user/{id}", method = RequestMethod.DELETE)
	@ResponseStatus(value = HttpStatus.OK)
	public void deleteUser(@PathVariable("id") Integer id) {
		if (!userList.removeIf(u -> u.getId() == id))
			throw new HttpClientErrorException(HttpStatus.NOT_FOUND);
	}

	@RequestMapping(value = "/user/", method = RequestMethod.POST)
	@ResponseStatus(value = HttpStatus.OK)
	public void createUser(@RequestBody User user) {
		Integer idMaior = userList.stream().mapToInt(u -> u.getId()).max().orElse(0);
		userList.add(new User(idMaior + 1, user.getName(), user.getLastName()));
	}

	@RequestMapping(value = "/user/{id}", method = RequestMethod.PUT)
	@ResponseStatus(value = HttpStatus.OK)
	public void updateUser(@PathVariable("id") Integer id, @RequestBody User user) {
		deleteUser(id);
		user.setId(id);
		userList.add(user);
	}

	public static void main(String[] args) throws Exception {
		SpringApplication.run(UserController.class, args);
	}
	
	  @Bean
	    public WebMvcConfigurer corsConfigurer() {
	        return new WebMvcConfigurerAdapter() {
	            @Override
	            public void addCorsMappings(CorsRegistry registry) {
	            	registry.addMapping("/**");
	            }
	        };
	    }

}
