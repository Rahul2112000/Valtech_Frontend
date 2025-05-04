export let vAutoCol = {
  mounted: (el, binding) => {
    // console.log(binding.arg[0]);
    // console.log(binding.arg);
    let args = binding.arg.split(":");
    el.style.color = args[0];
    el.style.backgroundColor = args[1];
    el.style.padding = args[2] + "px";
  },
};
 