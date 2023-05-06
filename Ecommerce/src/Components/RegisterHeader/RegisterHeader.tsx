import React, { useState } from 'react'
import Tiki from '../../assets/logo-tiki.svg'
import { Form, Link } from 'react-router-dom'
import SearchInput from '../SearchInput'
import MenuItem from '../MenuItem/MenuItem'
import { AiFillHome, AiOutlineCrown, AiOutlineShoppingCart } from 'react-icons/ai'
import { CiFaceSmile } from 'react-icons/ci'
import { Badge, Avatar, Modal, Input, Button } from 'antd'

import './Header.scss'
interface quickLinkItem {
  title: string
  link: string
}

export default function RegisterHeader() {
  const style = {
    color: '#0060ff',
    fontSize: '1.0em'
    // backgroundColor: '#fde3cf'
    // background: '#fff'
  }
  const quickLinks: quickLinkItem[] = [
    {
      title: 'Trái cây',
      link: '/'
    },
    {
      title: 'Trái cây',
      link: '/'
    },
    {
      title: 'Trái cây',
      link: '/'
    },
    {
      title: 'Trái cây',
      link: '/'
    }
  ]

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isModalLoginOpen, setIsModalLoginOpen] = useState(false)
  const [title, setTitle] = useState('Xin chào,')
  const [isLogin, setIsLogin] = useState(false)
  const showModal = () => {
    setIsModalOpen(true)
  }
  const handleOk = () => {
    setIsModalOpen(false)
  }

  const handleCancel = () => {
    setIsLogin(false)
    setTitle('Xin chào,')
    setIsModalOpen(false)
  }

  const handleModalLogin = () => {
    // console.log(`gg`)
    setIsLogin(true)
    // setIsModalLoginOpen(true)
    setTitle('Đăng nhập bằng Email')
  }

  const handleBack = () => {
    setIsLogin(false)
    // setIsModalLoginOpen(true)
    setTitle('Xin chào,')
  }
  return (
    <>
      <header className='py-5'>
        <div className='mx-auto max-w-7xl px-4'>
          <nav className='flex '>
            <div className='mid-left-container flex flex-1 items-center'>
              <div className='logo mr-12 '>
                <Link to='/'>
                  <img src={Tiki} alt='Tiki Logo' className='h-10 fill-tiki lg:h-10' />
                </Link>
              </div>
              <div className='search-container w-full rounded-lg '>
                <SearchInput />
              </div>
            </div>
            <div className='user-shortcut-container ml-12 flex justify-end'>
              <MenuItem icon={<AiFillHome style={style} />} title='Trang chủ' active={true} />
              <MenuItem icon={<AiOutlineCrown />} title='Astra' />
              <div className='register' onClick={() => showModal()} onKeyDown={showModal} aria-hidden='true'>
                <MenuItem icon={<CiFaceSmile />} title='Tài khoản' />
              </div>

              <div className='cash-item flex items-center justify-center'>
                <div className='relative ml-6 before:absolute before:inset-3 before:-left-3 before:top-2 before:block before:h-5  before:border-l before:border-solid'>
                  <MenuItem icon={<AiOutlineShoppingCart style={style} />} badge={true} active={true} />
                </div>
              </div>
            </div>
            {/* <div className='ml-5 text-xl lg:text-2xl'>Đăng ký</div> */}
          </nav>
          <div className='bottom-recommend flex justify-between'>
            <div className='quick-link-container ml-[105px] mt-2 flex h-6 min-w-[872px] flex-1 items-start'>
              {quickLinks.map(({ title, link }, index) => {
                return (
                  <a href={link} key={index} className='mr-3 block text-sm font-normal leading-extra text-tikiText'>
                    {title}
                  </a>
                )
              })}
            </div>
            <div className='location-wrap mt-2 max-w-["348px"] flex-1'>
              <div className='address'>Bạn muốn giao hàng tới đâu?</div>
            </div>
          </div>
        </div>
      </header>
      {/* <Modal title='Xin chào' open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <p className='mb-5 mt-[10px]'>Đăng nhập hoặc tạo tài khoản</p>
        <Input style={{ width: '410px' }} placeholder='Số điện thoại' />
        <Button type='primary' danger className='mx-0 mb-[10px] mt-6' style={{ width: '410px' }}>
          Tiếp tục
        </Button>
        <p onClick={() => handleModalLogin} aria-hidden='true'>
          Đăng nhập bằng Email
        </p>
        <p>Some contents...</p>
      </Modal> */}
      <Modal title={title} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        {isLogin ? (
          <>
            <p className='mb-5 mt-[10px]'>Nhập email và mật khẩu tài khoản Tiki</p>
            <form>
              <Input style={{ width: '410px' }} placeholder='Email' />
              <Input.Password style={{ width: '410px' }} placeholder='Password' className='mt-2' />
            </form>

            <Button type='primary' danger className='mx-0 mb-[10px] mt-6' style={{ width: '410px' }}>
              Đăng nhập
            </Button>
            <Button type='text' onClick={handleBack} aria-hidden='true' className='mx-auto cursor-pointer'>
              Quay lại
            </Button>
          </>
        ) : (
          <>
            <p className='mb-5 mt-[10px]'>Đăng nhập hoặc tạo tài khoản</p>
            <form>
              <Input style={{ width: '410px' }} placeholder='Email' />
              <Input.Password style={{ width: '410px' }} placeholder='Password' className='mt-2' />
            </form>

            <Button type='primary' danger className='mx-0 mb-[10px] mt-6' style={{ width: '410px' }}>
              Tiếp tục
            </Button>
            <Button type='text' onClick={handleModalLogin} aria-hidden='true' className='mx-auto cursor-pointer'>
              Đăng nhập bằng Email
            </Button>
          </>
        )}
      </Modal>
    </>
  )
}
