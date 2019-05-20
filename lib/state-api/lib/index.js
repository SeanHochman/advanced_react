class StateApi {
  constructor(rawData) {
    this.data = {
      articles: this.mapIntoObject(rawData.articles),
      authors: this.mapIntoObject(rawData.authors),
      searchTerm: ""
    };
    this.subscriptions = {};
    this.lastSubscriptionId = 0;
  }

  mapIntoObject = arr =>
    arr.reduce((acc, curr) => {
      acc[curr.id] = curr;
      return acc;
    }, {});

  getAuthor = authorId => this.data.authors[authorId];

  getState = () => this.data;

  subscribe = callback => {
    this.lastSubscriptionId++;
    this.subscriptions[this.lastSubscriptionId] = callback;
    return this.lastSubscriptionId;
  };

  unsubscribe = subscriptionId => {
    delete this.subscriptions[subscriptionId];
  };

  notifySubscribers = () =>
    Object.values(this.subscriptions).forEach(callback => callback());

  mergeWithState = stateChange => {
    this.data = {
      ...this.data,
      ...stateChange
    };
    this.notifySubscribers();
  };

  handleSearchTerm = term => this.mergeWithState({ searchTerm: term });
}

export default StateApi;
