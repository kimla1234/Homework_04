const cardUsersPlaceholder =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQGdbKCjCng8uNoAP3kMYd3dUMfo-LXguDxg&usqp=CAU";

export const cardUsers = (user) => {
  return `
  <!-- https://gist.github.com/goodreds/5b8a4a2bf11ff67557d38c5e727ea86c -->

<div
    class="max-w-2xl mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto  bg-white shadow-xl rounded-lg text-gray-900">
    <div class="rounded-t-lg  h-24 overflow-hidden">
        <img class="object-cover object-top w-full " src='${
          user?.image_bg
        }' alt='Mountain'>
    </div>
    <div class="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
        <img class="object-cover object-center h-32" src='${
          user.image || cardUsersPlaceholder
        }' alt='Woman looking front'>
    </div>
    <div class="text-center mt-2">
        <h2 class="font-semibold">${user.firstName} ${user.lastName}</h2>
        <p class="text-gray-500">${user.university}</p>
        <p class="text-gray-500">${user.email}</p>
    </div>
    <ul class="py-4 mt-2 text-gray-700 flex items-center justify-around">
        <li class="flex flex-col items-center justify-around">
            <div class="text-blue-600">Gender</div>
            <div>${user.gender}</div>
        </li>
        <li class="flex flex-col items-center justify-around">
            <div class="text-blue-600">Age</div>
            <div>${user.age}</div>
        </li>
        <li class="flex flex-col items-center justify-around">
            <div class="text-blue-600">City</div>
            <div>${user.address.city}</div>
        </li>
        
    </ul>
    <div class="p-4 border-t mx-8 mt-2">
        <button class="w-1/2 block mx-auto rounded-full bg-gray-900 hover:shadow-lg font-semibold text-white px-6 py-2">Follow</button>
    </div>
</div>
    `;
};
