import React from 'react';
import '../stylesheets/seperateProjectSection.css';

var SeperateProjectSection = () => {

    return (
        <div id="seperate-project-section">

            <div id="main-project-section">

                <div onClick={closeProjectSection} id="close-section">
                <img alt="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAABmJLR0QA/wD/AP+gvaeTAAADtUlEQVR4nO3dz28UdRjH8fejRSLqCS8GPOgRSYwn8Wg8QQFN+iMhNdGAlFR313/Bf8GdJUj5EU1oSFowCimcjN6MF+CAZxNDudWLqKFUHg4tye7MYCLdme/Tzud167e78EnfTIdmNymIiIiIiIiIiIhsDvakT3iX7RjTwBSwF3ihtlVb01/AbZwL/MGsfcFK2YNKg/gpdrHKIvBmlQsb7BYjHLQZlvKfKARZvzJ+QTGqdpNl9uWvlGdKHngCxajDW7zM8fzhSOFhxlTu5BrOCetwp6pldfAMT72hwPkQONl/VHaF7Mk9adPHCMt4I39UFuTFgecoRnWcl/JHZUEkIQUJRkGCUZBgFCQYBQlGQYJRkGAUJBgFCUZBglGQYBQkGAUJRkGCUZBgFCQYBQlGQYIpvuskMe8yjvEVsAJ8am2+S72pTqGuEHcMOAXsBF4BFjxjIu2qeoUKYoZjPOw7GgHmPGMs1aa6hQoCgDMD/Nt3sg246BkfJFpUq3BBrMO3wBFgte94GzDvPd5Ps6o+4YIAWJuF9be0DkZx5j3jcKpddQgZBMBazGN8AgP3lOeABe9yKNGsyoUNAmAtvsE5Rj6Kccm7jKbaVaXQQQCsw9c4xylGuew9DqTaVZXwQQCsw3lgmsEo23EueY/3Es2qxIZ/UvceB3B6wGtD2PN/PY9zxTNGrc1PCf7+odv4FeKcJk2Mx3YAi/4l7ybcMDSb4ltWkwwjyDTw2xD+nKf1NzBqn/Njwg1Ds+F7iLW5Drw+hC3/yTOOAbMM/iP6B+OwtbbG/QM2ybcs73KUYoz7GOPW4odEsyoRPoh3+RjjDINbV3DGrMW1VLuqEjqI9/gI4xzFGOPWYTHVriqFDeI9JnHOko8BE9bhaqJZlQv3Ei6AZ0zgzDG47wHGpLW4kmpXHcJdIeuveVwkHwMmrcX3aVbVJ1wQnC7wbN/JA+BIU97sEC/I2quDj60CU9bmcqoxdYsXxJgBllj76X/M2iwkXlSrcDf19fvElr9XPEm8K6ThFCQYBQlGQYJRkGAUJBgFCUZBglGQYBQkGAUJRkGCUZBgFCQYBQlGQYJRkGAUJBgFCaYsyL3+D7zL7pq2NI/xZ/6oLMivuSfN+klerWpTozm380dl7zqZA97u+3g/D/nds8pmNdmF/EHxCnFmgVt1rGm4GyxzNn9YCGId7jPCQeBmLbOa6QZwqOy3fZb+L8tmWGKZfRgt4GdyN3p5KvdY+1p+xjLvWJu7qQeJiIiIiIiIiIhsxCM5bb/fsG7oDAAAAABJRU5ErkJggg=="/>
                </div>

                <div id="project-data">
                </div>
            </div>

        </div>
    )
}


function closeProjectSection(){
    setTimeout(() => {
        document.getElementById("seperate-project-section").classList.remove("open");
    }, 300);

    document.getElementById("main-project-section").removeAttribute('class');
}



export default SeperateProjectSection;