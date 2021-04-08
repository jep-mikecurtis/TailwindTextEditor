const mainContent = function (target) {
  return `
  <div id="${target}_display" class="flex-1 ml-4"></div>
    <div id="${target}_wrapper" class="flex-1 relative flex bg-grene-600 text-sm border border-gray-800 shdaow leading-loose">
      <div id="${target}_numbers" class="p-2 text-center bg-gray-100 border-r border-gray-800">
    </div>
    <textarea id="${target}_editor" class="flex-1 p-2 outline-none"></textarea>
  </div>
`;
};

export { mainContent };
