const User = require('../model/user')

module.exports.api_post = async (req, res) => {

    const data = req.body;
    try {
        const savedUser = await User.create({
            name: data.name,
            temp: data.tempreture
        })

        console.log(savedUser)
        res.status(200).send({ status: 'OK', Info: savedUser })
    } catch (err) {
        console.log(err);
        res.status(400).send(err);
    }

}