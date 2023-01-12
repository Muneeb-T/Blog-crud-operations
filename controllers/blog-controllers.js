import { db } from '../config/database.js';
import tables from '../config/tables.js';
const createBlog = async (req, res, next) => {
    try {
        const sql = 'INSERT INTO blogs SET ?';
        db.query(sql, req.body, (err, result) => {
            if (err) {
                throw err;
            }
            res.status(201).json({
                success: true,
                message: 'Post added successfully.',
            });
        });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};

const getBlog = async (req, res, next) => {
    try {
        const { id } = req.params;
        const sql = `SELECT * FROM  ${tables.BLOGS} WHERE ID = ${id}`;
        db.query(sql, (err, result) => {
            if (err) {
                throw err;
            }

            if (!result.length) {
                return res.status(404).json({
                    success: false,
                    message: 'Blog not found.',
                });
            }
            res.status(200).json({
                success: true,
                blog: result[0],
                message: 'Blog fetched successfully.',
            });
        });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};

const getBlogs = async (req, res, next) => {
    try {
        const sql = `SELECT * FROM ${tables.BLOGS}`;
        db.query(sql, (err, result) => {
            if (err) {
                throw err;
            }
            if (!result.length) {
                return res.status(404).json({
                    success: false,
                    message: 'No blogs yet.',
                });
            }
            res.status(200).json({
                success: true,
                blogs: result,
                message: 'Blogs fetched successfully.',
            });
        });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};

const updateBlog = async (req, res, next) => {
    try {
        const { id } = req.params;
        const sql = `UPDATE ${tables.BLOGS} set ? WHERE id = ${id}`;

        db.query(sql, req.body, (err, result) => {
            if (err) {
                throw err;
            }
            if (!result.affectedRows) {
                return res.status(404).json({
                    success: false,
                    message: 'Blog not found',
                });
            }
            res.status(201).json({
                success: true,
                message: 'Blog updated successfully.',
            });
        });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};

const deleteBlog = async (req, res, next) => {
    try {
        const { id } = req.params;
        const sql = `DELETE FROM ${tables.BLOGS} WHERE id = ${id}`;
        db.query(sql, (err, result) => {
            if (err) {
                throw err;
            }
            if (!result.affectedRows) {
                return res.status(404).json({
                    success: false,
                    message: 'Blog not found',
                });
            }
            res.status(200).json({
                success: true,
                message: 'Blog deleted successfully.',
            });
        });
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
