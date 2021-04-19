window.onload = init;

function init(){
	document.querySelector('.ep_profile').onsubmit = updateProfile;
}

function updateProfile(){
	var f_name = document.getElementById("p_name");
	var f_email = document.getElementById("p_email");
	var f_address = document.getElementById("p_address");
	var f_city = document.getElementById("p_city");
	var f_prov = document.getElementById("p_prov");
	var f_post = document.getElementById("p_postal");

	var ei_name = document.getElementById("i_name");
	var ei_email = document.getElementById("i_email");
	var ei_address = document.getElementById("i_address");
	var ei_city = document.getElementById("i_city");
	var ei_prov = document.getElementById("i_prov");
	var ei_post = document.getElementById("i_postal");

	var name = f_name.value;
	var email = f_email.value;
	var address = f_address.value;
	var city = f_city.value;
	var prov = f_prov.value;
	var post = f_post.value;

	ei_name.value = name;
	ei_email.value = email;
	ei_address.value = address;
	ei_city.value = city;
	ei_prov.value = prov;
	ei_post.value = post;

	return true;
}
