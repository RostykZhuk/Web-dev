const ApiError = require('../error/ApiError');
class UserController {
  async registration(req, res) {}
  async login(req, res) {}
  async check(req, res) {
    const query = req.query;
    res.json(query);
    if (!id) {
      next(ApiError.badRequest('Not given id'));
    }
    res.json(id);
  }
}

module.exports = new UserController();
