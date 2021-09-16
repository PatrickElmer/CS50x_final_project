function search() {
  if (this.q.length === 0) {
    this.showBox = false;
    this.lastSearch = "";
    this.searchresults = [];
    return;
  }
  if (this.q === this.lastSearch) {
    return;
  }

  // Search all glosses
  this.searchresults = Object.keys(this.searchterms).filter((item) => {
    return item.toLowerCase().includes(this.q.toLowerCase());
  });

  // Show dropdown, if there are results
  if (this.searchresults.length > 0) {
    this.showBox = true;
  } else {
    this.showBox = false;
  }

  this.lastSearch = this.q;
}
