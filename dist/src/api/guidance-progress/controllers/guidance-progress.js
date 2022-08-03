"use strict";
/**
 *  guidance-progress controller
 */
Object.defineProperty(exports, "__esModule", { value: true });
const strapi_1 = require("@strapi/strapi");
exports.default = strapi_1.factories.createCoreController('api::guidance-progress.guidance-progress', ({ strapi }) => ({
    async findOne(ctx) {
        const { id } = ctx.params;
        const data = await strapi.query('api::guidance-progress.guidance-progress').findMany({
            populate: { student: true },
            orderBy: { createdAt: 'desc' }
        });
        if (!data) {
            return ctx.notFound("ID not found", {
                message: "Input yang dimasukan tidak ditemukan dalam database"
            });
        }
        let collection = [];
        for (const item of data) {
            if (item.student.student_id == id) {
                collection.push({
                    id: item.id,
                    note: item.note,
                    to_do: item.to_do,
                    date: item.date,
                    student: {
                        id: item.student.id,
                        name: item.student.name,
                        title: item.student.title,
                        student_id: item.student.student_id
                    },
                    created_at: item.createdAt,
                    updated_at: item.updatedAt
                });
            }
        }
        return collection;
    },
    async find(ctx) {
        const data = await strapi.query('api::guidance-progress.guidance-progress').findMany({
            populate: { student: true },
            orderBy: { createdAt: 'desc' }
        });
        let collection = [];
        for (const item of data) {
            collection.push({
                id: item.id,
                note: item.note,
                to_do: item.to_do,
                date: item.date,
                student: {
                    id: item.student.id,
                    name: item.student.name,
                    title: item.student.title,
                    student_id: item.student.student_id
                },
                created_at: item.createdAt,
                updated_at: item.updatedAt
            });
        }
        return collection;
    },
}));
