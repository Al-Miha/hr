///////////////////////////////////////
// Reveal Items Slide From Down
const allItemsSlideFromDown = document.querySelectorAll(
  ".item-slide-from-down"
);

const revealItemSlideFromDown = function (entries, observer) {
  //console.log(entries);
  const [entry] = entries;
  console.log(entry);

  if (!entry.isIntersecting) return;

  entry.target.classList.remove("item-slide-from-down--hidden");
  // entry.target.classList.remove("section--hidden2");
  observer.unobserve(entry.target);
};

const itemSlideFromDownObserver = new IntersectionObserver(
  revealItemSlideFromDown,
  {
    root: null,
    threshold: 0.25,
  }
);

allItemsSlideFromDown.forEach(function (section) {
  itemSlideFromDownObserver.observe(section);
  section.classList.add("item-slide-from-down--hidden");
});

///////////////////////////////////////
// Reveal sections - FROM LEFT
const allItemsSlideFromLeft = document.querySelectorAll(
  ".item-slide-from-left"
);

const revealItemSlideFromLeft = function (entries, observer) {
  //console.log(entries);
  const [entry] = entries;
  console.log(entry);

  if (!entry.isIntersecting) return;

  entry.target.classList.remove("item-slide-from-left--hidden");
  observer.unobserve(entry.target);
};

const itemSlideFromLeftObserver = new IntersectionObserver(
  revealItemSlideFromLeft,
  {
    root: null,
    threshold: 0.25,
  }
);

allItemsSlideFromLeft.forEach(function (section) {
  itemSlideFromLeftObserver.observe(section);
  section.classList.add("item-slide-from-left--hidden");
});

///////////////////////////////////////
// Reveal Items Slide From Right
const allItemsSlideFromRight = document.querySelectorAll(
  ".item-slide-from-right"
);

const revealItemSlideFromRight = function (entries, observer) {
  //console.log(entries);
  const [entry] = entries;
  console.log(entry);

  if (!entry.isIntersecting) return;

  entry.target.classList.remove("item-slide-from-right--hidden");
  // entry.target.classList.remove("section--hidden2");
  observer.unobserve(entry.target);
};

const itemSlideFromRightObserver = new IntersectionObserver(
  revealItemSlideFromRight,
  {
    root: null,
    threshold: 0.25,
  }
);

allItemsSlideFromRight.forEach(function (section) {
  itemSlideFromRightObserver.observe(section);
  section.classList.add("item-slide-from-right--hidden");
});
