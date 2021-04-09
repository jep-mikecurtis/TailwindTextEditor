export default {
  mainContent() {
    return `
        <div class="px-4 py-10">
          ${this.toolTip()}
          <div class="flex flex-row-reverse">
            <div id="${this.target}_display" class="flex-1 ml-4"></div>
              <div id="${
                this.target
              }_wrapper" class="flex-1 relative flex text-xs border border-gray-800 rounded overflow-hidden shadow leading-loose">
                <div id="${
                  this.target
                }_numbers" class="p-2 text-center bg-gray-100 border-r-2 border-blue-400 bg-gray-800 text-white">
              </div>

              <textarea id="${
                this.target
              }_editor" class="flex-1 p-2 outline-none resize-none"></textarea>
            </div>
          </div>
        </div>
      `;
  },
  toolTip() {
    return `
        <div class="mb-4 flex space-x-2">
          <div id="heading-dropdown" class="relative">
            <button class="border border-gray-600 py-1 px-3 text-sm rounded shadow toggle" data-toggle="toggleHeading">H</button>
            <div class="hidden absolute z-20 p-4 bg-white flex flex-col space-y-4 mt-2 shadow border border-gray-300 rounded" id="toggleHeading">
              <button class="border border-gray-600 py-1 px-3 text-sm rounded shadow ${this.target}_tooltip toggle" data-toggle="toggleHeading" data-tag="h1" @click="show=false">H1</button>
              <button class="border border-gray-600 py-1 px-3 text-sm rounded shadow ${this.target}_tooltip toggle" data-toggle="toggleHeading" data-tag="h2" @click="show=false">H2</button>
              <button class="border border-gray-600 py-1 px-3 text-sm rounded shadow ${this.target}_tooltip toggle" data-toggle="toggleHeading" data-tag="h3" @click="show=false">H3</button>
            </div>
          </div>
          <button class="border border-gray-600 py-1 px-3 text-sm rounded shadow ${this.target}_tooltip" data-tag="p">p</button>
          <button class="border border-gray-600 py-1 px-3 text-sm rounded shadow ${this.target}_tooltip" data-tag="a" data-class="text-blue-600">a</button>
          <button class="border border-gray-600 py-1 px-3 text-sm rounded shadow ${this.target}_tooltip" data-tag="div">div</button>
          <button class="border border-gray-600 py-1 px-3 text-sm rounded shadow ${this.target}_tooltip" data-tag="div" data-class="flex">flex</button>
          <button class="border border-gray-600 py-1 px-3 text-sm rounded shadow ${this.target}_tooltip" data-tag="button" data-class="py-1 px-4 shadow rounded">Button</button>
        </div>
      `;
  },
};
