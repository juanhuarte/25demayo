const data = require('../utils/data')

module.exports.allInfo = (req, res) => {
   res.status(200).json({
      success: true,
      response: data,
   })
}
