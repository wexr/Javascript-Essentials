var course = new Object();

// course.title = "JavaScript Essential Training";
// course.intructor = "Morten Rand-Hendriksen";
// course.level = 1;
// course.published = true;
// course.views = 0;

var course = {
    title: "JavaScript Essential Training",
    instructor: "Morten Raan.Hendriksen",
    level: 1,
    published: true,
    views: 0,
    updateViews: function() {
        return ++course.views;
    }
}

console.log(course);
console.log(course.views);
course.updateViews();
course.updateViews();
console.log(course.views);




