package br.org.treinamento.user;

import com.fasterxml.jackson.annotation.JsonProperty;

public class User {

	private Integer id;
	private String name;
	private String lastName;
	private String photoUrl;
	private final String validationMessageName = "Nome é obrigatório";

	public User(@JsonProperty("name") String name, @JsonProperty("lastName") String lastName,
			@JsonProperty("photoUrl") String photoUrl) {
		setName(name);
		this.lastName = lastName;
		this.photoUrl = photoUrl;
	}

	public User(Integer id, String name, String lastName, String photoUrl) {
		this.id = id;
		setName(name);
		this.lastName = lastName;
		this.photoUrl = photoUrl;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public String getLastName() {
		return lastName;
	}

	public String getPhotoUrl() {
		return photoUrl;
	}

	private void setName(String name) {
		if (name == null || name.isEmpty())
			throw new IllegalArgumentException(validationMessageName);
		this.name = name;
	}

}
