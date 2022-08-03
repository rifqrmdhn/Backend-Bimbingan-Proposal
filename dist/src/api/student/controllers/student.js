"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 *  student controller
 */
const strapi_1 = require("@strapi/strapi");
exports.default = strapi_1.factories.createCoreController('api::student.student', ({ strapi }) => ({
    async findOne(ctx) {
        const { id } = ctx.params;
        const data = await strapi.query('api::student.student').findOne({
            where: { student_id: id },
            populate: { advisors: true, guidance_progresses: true }
        });
        if (!data) {
            return ctx.notFound("NIM not found", {
                message: "Input yang dimasukan tidak ditemukan dalam database"
            });
        }
        const advisors = data.advisors.map(item => {
            return {
                id: item.id,
                lecturer_id: item.lecturer_id,
                lecturer_code: item.lecturer_code,
                name: item.name
            };
        });
        const response = {
            id: data.id,
            name: data.name,
            student_id: data.student_id,
            title: data.title,
            created_at: data.createdAt,
            updated_at: data.updatedAt,
            advisors: advisors
        };
        return response;
    },
    async find(ctx) {
        const data = await strapi.query('api::student.student').findMany({
            populate: { advisors: true }
        });
        const response = data.map(item => {
            const advisors = item.advisors.map(item => {
                return {
                    id: item.id,
                    lecturer_id: item.lecturer_id,
                    lecturer_code: item.lecturer_code,
                    name: item.name
                };
            });
            return {
                id: item.id,
                name: item.name,
                student_id: item.student_id,
                title: item.title,
                created_at: item.createdAt,
                updated_at: item.updatedAt,
                advisors: advisors
            };
        });
        return response;
    }
}));
