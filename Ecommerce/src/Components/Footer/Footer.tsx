import React, { useState } from 'react'

interface footerItem {
  title: string
  content: string[]
}

export default function Footer() {
  const footerDetail: footerItem[] = [
    {
      title: 'Hỗ trợ khách hàng',
      content: [
        'Hotline: 1900-6035',
        'Các câu hỏi thường gặp',
        'Gửi yêu cầu hỗ trợ',
        'Hướng dẫn đặt hàng',
        'Phương thức vận chuyển',
        'Chính sách đổi trả',
        'Hướng dẫn trả góp',
        'Chính sách hàng nhập khẩu',
        'Hỗ trợ khách hàng: hotro@tiki.vn',
        'Báo lỗi bảo mật: security@tiki.vn'
      ]
    },
    {
      title: 'Về Tiki',
      content: [
        'Giới thiệu Tiki',
        'Tiki Blog',
        'Tuyển dụng',
        'Chính sách bảo mật thanh toán',
        'Chính sách bảo mật thông tin cá nhân',
        'Chính sách giải quyết khiếu nại',
        'Điều khoản sử dụng',
        'Giới thiệu Tiki Xu',
        'Gửi Astra nhận Xu mua sắm thả ga',
        'Tiếp thị liên kết cùng Tiki',
        'Bán hàng doanh nghiệp',
        'Điều kiện vận chuyển'
      ]
    }
  ]
  return (
    <footer className=' py-16'>
      <div className='mx-auto max-w-7xl px-4'>
        <div className='flex flex-wrap justify-between gap-5 px-4'>
          {footerDetail.map(({ title, content }, index) => {
            return (
              <div className='min-w-2xl flex flex-1 flex-col' key={index}>
                <h4 className='mb-3 text-base font-semibold text-subTitle'>{title}</h4>
                {content.map((item, index) => (
                  <div className='mb-2 text-xs text-tikiText hover:cursor-pointer hover:underline' key={index}>
                    {item}
                  </div>
                ))}
              </div>
            )
          })}

          <div className='min-w-2xl flex flex-1 flex-col'>
            <h4 className='mb-3 text-base font-semibold text-subTitle'>Hợp tác và liên kết</h4>
            <div className='mb-2 text-xs text-tikiText hover:underline'>Quy chế hoạt động Sàn GDTMĐT</div>
            <div className='mb-2 text-xs text-tikiText hover:underline'>Bán hàng cùng Tiki</div>
            <h4 className='mb-3 mt-3 text-base font-semibold text-subTitle'>Chứng nhận bởi</h4>
          </div>
          <div className='min-w-2xl flex flex-1 flex-col'>
            <h4 className='mb-3 text-base font-semibold text-subTitle'>Phương thức thanh toán</h4>
          </div>
          <div className='min-w-2xl flex flex-1 flex-col'>
            <h4 className='mb-3 text-base font-semibold text-subTitle'>Kết nối cùng chúng tôi</h4>
          </div>
        </div>
      </div>
    </footer>
  )
}
