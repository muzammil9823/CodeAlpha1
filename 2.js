document.addEventListener("DOMContentLoaded", function () {
    const surveyForm = document.getElementById("surveyForm");

    surveyForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const formData = new FormData(surveyForm);


        formData.forEach((value, key) => {
            console.log(`${key}: ${value}`);
        });

        surveyForm.reset();
    });
});
