export default function SearchInput() {
  return (
    <>
      <div className="search-container py-[20px] px-6 flex-row justify-end items-end text-right align-right">
        <div className="w-[30%] float-right">
          <form class="flex items-center">
            <label for="simple-search" class="sr-only">
              Search
            </label>
            <div class="relative w-full">
              <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <input
                type="text"
                id="simple-search"
                class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#0052CC] focus:border-[#0052CC] block w-full pl-10 p-3.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#0052CC] dark:focus:border-[#0052CC]"
                placeholder="Search"
                required=""
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
