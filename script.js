const imageContainer = document.getElementById("imgcontainer");

const foxImageGenerator = async () => {
	fetch("https://randomfox.ca/floof/")
	.then(response =>response.json())
	.then(res => imageContainer.src = res.image)
	.catch()
}
foxImageGenerator();