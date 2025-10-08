// function home() {
// const home = document.createElement("span");
// home.innerText = "hii";
// document.body.appendChild(home);
// };

// home()

// now add event listener hambarger 
const hambarger = document.getElementById("menu-btn");
hambarger.addEventListener('click', () => {
  mobileMenu.classList.toggle('max-h-0');
  mobileMenu.classList.toggle('opacity-0');
  mobileMenu.classList.toggle('min-h-[500px]');
  mobileMenu.classList.toggle('opacity-100');
});
// mobile menu
const mobileMenu = document.createElement("div");
mobileMenu.id = "mobile-menu";
mobileMenu.classList = "lg:hidden max-h-0 rounded-xl md:min-w-[1000px] min-w-[500px] bg-[rgb(0,0,0,0.9)] pt-10 opacity-0 -right-5 top-15 absolute overflow-hidden transition-all duration-700";
mobileMenu.innerHTML = `
   <div class="flex flex-col justify-between gap-3 items-center">

   <button type="submit" class="pr-8 pl-5 py-3 hover:bg-indigo-400 transition-all duration-500 cursor-pointer bg-indigo-600 rounded-full text-xl text-white">Enroll Now</button>

            <a class="font-bold text-lg active:text-indigo-600 text-gray-500" href="index.html">Home</a>
            <a class="font-bold text-lg active:text-indigo-600 text-gray-500" href="about.html">About</a>
            <a class="font-bold text-lg active:text-indigo-600 text-gray-500" href="courses">Courses</a>
            <a class="font-bold text-lg active:text-indigo-600 text-gray-500" href="faculty">Faculty</a>
            <a class="font-bold text-lg active:text-indigo-600 text-gray-500" href="contect">Contact</a>

          </div>
`;

// append mobile menu under nav
hambarger.appendChild(mobileMenu);