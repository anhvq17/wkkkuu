import Joi from 'joi';

export const productSchema = Joi.object({
  name: Joi.string()
    .required()
    .messages({
      'string.empty': 'Tên sản phẩm không được để trống',
      'any.required': 'Tên sản phẩm là bắt buộc'
    }),

  description: Joi.string()
    .required()
    .messages({
      'string.empty': 'Mô tả sản phẩm không được để trống',
      'any.required': 'Mô tả là bắt buộc'
    }),

  status: Joi.string()
    .valid('Còn hàng', 'Hết hàng')
    .required()
    .messages({
      'any.only': 'Trạng thái chỉ có thể là "Còn hàng" hoặc "Hết hàng"',
      'any.required': 'Trạng thái là bắt buộc'
    }),

  quantity: Joi.number()
    .integer()
    .min(0)
    .required()
    .messages({
      'number.base': 'Số lượng phải là số',
      'number.min': 'Số lượng phải lớn hơn hoặc bằng 0',
      'any.required': 'Số lượng là bắt buộc'
    }),
    flavors: Joi.array()
    .items(Joi.string().messages({
      'string.base': 'Phần tử trong flavors phải là chuỗi'
    }))
    .messages({
      'array.base': 'flavors phải là mảng'
    }),

  categoryId: Joi.array()
    .items(Joi.string().length(24).hex().messages({
      'string.length': 'ID danh mục phải đúng 24 ký tự',
      'string.hex': 'ID danh mục không hợp lệ'
    }))
    .length(1)
    .required()
    .messages({
      'array.base': 'categoryId phải là mảng',
      'array.length': 'categoryId phải chứa đúng 1 phần tử',
      'any.required': 'categoryId là bắt buộc'
    }),

  brandId: Joi.array()
    .items(Joi.string().length(24).hex().messages({
      'string.length': 'ID thương hiệu phải đúng 24 ký tự',
      'string.hex': 'ID thương hiệu không hợp lệ'
    }))
    .length(1)
    .required()
    .messages({
      'array.base': 'brandId phải là mảng',
      'array.length': 'brandId phải chứa đúng 1 phần tử',
      'any.required': 'brandId là bắt buộc'
    }),
});
