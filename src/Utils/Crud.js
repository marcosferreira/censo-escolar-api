export class CRUD {
  constructor(Model) {
    this.model = Model;

    this.index = this.index.bind(this);
    this.store = this.store.bind(this);
    this.show = this.show.bind(this);
    this.update = this.update.bind(this);
    this.destroy = this.destroy.bind(this);
  }

  async index(request, response) {
    try {
      const doc = await this.model.find(request.body);

      return response.status(200).json(doc);
    } catch (error) {
      return response.status(500).json({ error: error.message });
    }
  }

  async store(request, response) {
    try {
      const doc = await this.model.create(request.body);

      return response.status(200).json(doc);
    } catch (error) {
      return response.status(500).json({ error: error.message });
    }
  }

  async show(request, response) {
    try {
      const doc = await this.model.findOne({ _id: request.params.id });

      return response.status(200).json(doc);
    } catch (error) {
      return response.status(500).json({ error: error.message });
    }
  }

  async update(request, response) {
    try {
      const doc = await this.model.findOneAndUpdate({ _id: request.params.id }, request.body);

      return response.status(200).json(doc);
    } catch (error) {
      return response.status(500).json({ error: error.message });
    }
  }

  async destroy(request, response) {
    try {
      const doc = await this.model.findOneAndDelete({ _id: request.params.id });

      return response.status(200).json(doc);
    } catch (error) {
      return response.status(500).json({ error: error.message });
    }
  }
}
