module.exports = function (Service) {
  let module = {};

  module.getAll = async function (req, res) {
    try {
      let data = await Service.getAll();

      return res.json(data);
    } catch (e) {
      console.log(Service, e);
      res.status(500).send(e);
    }
  }

  module.getById = async function (req, res) {
    try {
      let id = req.params.id;
      let data = await Service.getById(id);

      return res.json(data);
    } catch (e) {
      console.log(Service, e);
      res.status(500).send(e);
    }
  },

  module.insert = async function (req, res) {
    try {
      let payload = req.body;
      let data = await Service.insert(payload);

      return res.json(data);
    } catch (e) {
      console.log(Service, e);
      res.status(500).send(e);
    }
  },

  module.update = async function (req, res) {
    try {
      let id = req.params.id;
      let payload = req.body;
      let data = await Service.update(id, payload);

      return res.json(data);
    } catch (e) {
      console.log(Service, e);
      res.status(500).send(e);
    }
  },

  module.remove = async function (req, res) {
    try {
      let id = req.params.id;
      let data = await Service.remove(id);

      return res.json(data);
    } catch (e) {
      console.log(Service, e);
      res.status(500).send(e);
    }
  }

  return module;
};