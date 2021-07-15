fetch("https://randomuser.me/api/?results=100")
  .then((response) => response.json())
  .then((data) => {
    //   Store the results
    let people = data.results;

    let names = [];
    people.forEach((person, index) => {
      names[
        index
      ] = `${person.name.title} ${person.name.first} ${person.name.last}`;
    });

    console.log(names);

    let message = `All the people available are ${names.join(", ")}`;
    console.log(message);

    let namesFromMessage = message.split(", ");
    console.log(namesFromMessage);

    let pageTitle = "This is my first project!";
    let slug = pageTitle.split(" ").join("-");
    console.log(slug);
  });
