class Student {
    constructor(name, surname, description, photoSrc, tags) {
        this.name = name;
        this.surname = surname;
        this.description = description;
        this.photoSrc = photoSrc;
        this.tags = tags;
    }

    
    set newName(newName) {
        this.name = newName;
    }

}
export default Student;