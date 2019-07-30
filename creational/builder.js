// Profile class, it will only contain business logic and set the values coming from the created object

class Profile {
    /* Receives the builder and assigns the values */
    constructor(builder) {
        this.borders = builder.borders;
        this.theme = builder.theme;
    }
    /* Some Business logic and abstract/generic methods here */
}

class ProfileBuilder {
    constructor(){ }
    /* Define all the steps needed to create a profile */
    setBorders(style) {
        this.borders = style;
        return this;
    }
    setTheme(style) {
        this.theme = style;
        return this;
    }
    /* Could also be called getProfile() */
    build() {
        return new Profile(this);
    }
}

function main() {
    return new ProfileBuilder()
        .setMenu('top')
        .setBorders('soft')
        .build();
}
main();

class ProfileDirector {
    /* The director receives the builder */
    constructor(builder) {
        this.builder = builder;
    }

    /* Implements a method to automatically generate a popular profile */
    createPopularProfile() {
        return this.builder
            .setMenu('top')
            .setBorders('soft')
            .build();
    }
}