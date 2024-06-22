import Post from "../models/postModel.js";

const driversPost = {
	createPost: async (req, res) => {
		try {
			const post = new Post(req.body);
			const newPost = await post.save();
			res.json({
				result: "good",
				message: "Post created",
				data: newPost._id
			});
		} catch (error) {
			res.json({
				result: "wrong",
				message: "invalid data",
				data: null
			});
		}
	},
	readAllPost: async (req, res) => {
		try {
			const posts = await Post.find({});
			res.json(posts);
		} catch (error) {
			res.json({
				result: "wrong",
				message: "invalid data",
				data: null
			});
		}
	},
	deletePost: async (req, res) => {
		try {
			const postId = parseInt(req.params.id, 10);
			posts = posts.filter((post) => post.id !== postId);
			res.status(204).send();
		} catch (error) {
			res.json({
				result: "wrong",
				message: "invalid data",
				data: null
			});
		}
	}
};

export default driversPost;
