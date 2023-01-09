const createBlog = async (req, res, next) => {
    try {
        const { title, body } = req.body;
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};

const getBlog = async (req, res, next) => {
    try {
        const { id } = req.params;
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};

const getBlogs = async (req, res, next) => {
    try {
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};

const updateBlog = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { title, body } = req.body;
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};

const deleteBlog = async (req, res, next) => {
    try {
        const { id } = req.params;
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};

export default {
    createBlog,
    getBlog,
    getBlogs,
    updateBlog,
    deleteBlog,
};