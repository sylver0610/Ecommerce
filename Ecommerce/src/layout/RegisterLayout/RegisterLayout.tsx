import Footer from '../../Components/Footer'
import RegisterHeader from '../../Components/RegisterHeader'
import React from 'react'
import type { MenuProps } from 'antd'
import { Layout, Menu, theme } from 'antd'
const { Header, Content, Sider } = Layout
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons'
import Astra from '../../assets/icons/astra.webp'
import { v4 as uuidv4 } from 'uuid'
import './Layout.scss'
import { Link } from 'react-router-dom'

interface Props {
  children?: React.ReactNode
}
type MenuItem = Required<MenuProps>['items'][number]

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group'
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type
  } as MenuItem
}
const items: MenuProps['items'] = [
  getItem(
    'Nổi bật',
    uuidv4(),
    null,
    [
      getItem('Astra Reward', uuidv4()),
      getItem('Tiki Exchange', uuidv4()),
      getItem('Giá rẻ mỗi ngày', uuidv4()),
      getItem('Xả kho', uuidv4()),
      getItem('Mã giảm giá', uuidv4()),
      getItem('Ưu đãi thẻ, ví', uuidv4()),
      getItem('Đóng tiền, nạp thẻ', uuidv4()),
      getItem('Mua trước trả sau', uuidv4()),
      getItem('Bảo hiểm Tiki360', uuidv4())
    ],
    'group'
  ),
  getItem(
    'Danh mục',
    uuidv4(),
    null,
    [
      getItem('Đồ Chơi- Mẹ & Bé', uuidv4()),
      getItem('NGON', uuidv4()),
      getItem('Điện Thoại - Máy Tính Bảng', uuidv4()),
      getItem('Làm Đẹp - Sức Khỏe', uuidv4()),
      getItem('Điện Gia Dụng', uuidv4()),
      getItem('Thời trang nữ', uuidv4()),
      getItem('Thời trang nam', uuidv4()),
      getItem('Giày - Dép nữ', uuidv4()),
      getItem('Túi thời trang nữ', uuidv4()),
      getItem('Thời trang nam', uuidv4()),
      getItem('Giày - Dép nữ', uuidv4()),
      getItem('Túi thời trang nữ', uuidv4()),
      getItem('Thời trang nam', uuidv4()),
      getItem('Giày - Dép nữ', uuidv4()),
      getItem('Túi thời trang nữ', uuidv4()),
      getItem('Thời trang nam', uuidv4()),
      getItem('Giày - Dép nữ', uuidv4()),
      getItem('Túi thời trang nữ', uuidv4()),
      getItem('Thời trang nam', uuidv4()),
      getItem('Giày - Dép nữ', uuidv4()),
      getItem('Túi thời trang nữ', uuidv4())
    ],
    'group'
  ),
  getItem('Group', uuidv4(), null, [getItem('Option 13', uuidv4()), getItem('Option 14', uuidv4())], 'group')
]

const menuList = [
  {
    label: 'Nổi bật',
    children: [
      {
        label: 'Astra Reward',
        to: '/login'
      },
      {
        label: 'Tiki Exchange',
        to: '/login'
      },
      {
        label: 'Giá rẻ mỗi ngày',
        to: '/login'
      },
      {
        label: 'Xả kho',
        to: '/login'
      },
      {
        label: 'Mã giảm giá',
        to: '/login'
      },
      {
        label: 'Ưu đãi thẻ, ví',
        to: '/login'
      },
      {
        label: 'Đóng tiền, nạp thẻ',
        to: '/login'
      },
      {
        label: 'Mua trước trả sau',
        to: '/login'
      },
      {
        label: 'Bảo hiểm Tiki360',
        to: '/login'
      }
    ]
  },
  {
    label: 'Danh mục',
    children: [
      {
        label: 'Đồ Chơi- Mẹ & Bé',
        to: '/login'
      },
      {
        label: 'NGON',
        to: '/login'
      },
      {
        label: 'Điện Thoại - Máy Tính Bảng',
        to: '/login'
      },
      {
        label: 'Làm Đẹp - Sức Khỏe',
        to: '/login'
      },
      {
        label: 'Điện Gia Dụng',
        to: '/login'
      },
      {
        label: 'Thời trang nữ',
        to: '/login'
      },
      {
        label: 'Thời trang nam',
        to: '/login'
      },
      {
        label: 'Giày - Dép nữ',
        to: '/login'
      },
      {
        label: 'Túi thời trang nữ',
        to: '/login'
      },
      {
        label: 'Giày - Dép nam',
        to: '/login'
      },
      {
        label: 'Túi thời trang nam',
        to: '/login'
      },
      {
        label: 'Balo và Vali',
        to: '/login'
      },
      {
        label: 'Phụ kiện thời trang',
        to: '/login'
      },
      {
        label: 'Đồng hồ và Trang sức',
        to: '/login'
      },
      {
        label: 'Laptop - Máy Vi Tính - Linh kiện',
        to: '/login'
      },
      {
        label: 'Nhà Cửa - Đời Sống',
        to: '/login'
      },
      {
        label: 'Cross Border - Hàng Quốc Tế',
        to: '/login'
      },
      {
        label: 'Bách Hóa Online',
        to: '/login'
      },
      {
        label: 'Thiết Bị Số - Phụ Kiện Số',
        to: '/login'
      },
      {
        label: 'Voucher - Dịch vụ',
        to: '/login'
      },
      {
        label: 'Ô Tô - Xe Máy - Xe Đạp',
        to: '/login'
      },
      {
        label: 'Nhà Sách Tiki',
        to: '/login'
      },
      {
        label: 'Điện Tử - Điện Lạnh',
        to: '/login'
      },
      {
        label: 'Thể Thao - Dã Ngoại',
        to: '/login'
      },
      {
        label: 'Máy Ảnh - Máy Quay Phim',
        to: '/login'
      },
      {
        label: 'Sản phẩm Tài chính - Bảo hiểm',
        to: '/login'
      }
    ]
  }
]

const menus = menuList.map(({ label, children }, index) => {
  return (
    <Menu.ItemGroup key={index} title={label}>
      {children.map(({ label, to }, index) => {
        return (
          <Menu.Item title={label} key={index}>
            <Link to={to} className='flex items-center '>
              <img src={Astra} alt='label' className='mr-[6px] h-8 w-8 rounded-[35%]' />
              <span className='inline-block'>{label}</span>
            </Link>
          </Menu.Item>
        )
      })}
    </Menu.ItemGroup>
  )
})

export default function RegisterLayout({ children }: Props) {
  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e)
  }
  //
  return (
    <>
      <RegisterHeader />

      <div className='mx-auto max-w-7xl px-4'>
        <Layout>
          <Sider width={250}>
            {/* <Menu
              mode='inline'
              onClick={onClick}
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%', borderRight: 0 }}
              items={items}
            >
              <Menu.Item title='Reducing Resources'>
                <Link to='/login'>
                  <span>Reducing Resources</span>
                </Link>
              </Menu.Item>
            </Menu> */}
            <Menu title='hahaha' mode='inline' onClick={onClick} style={{ height: '100%', borderRight: 0 }}>
              {menus}
            </Menu>
          </Sider>
          <Layout>
            <Content className='min-h-[1200px] max-w-[1200px]'>{children}</Content>
            <Footer />
          </Layout>
        </Layout>
      </div>
    </>
  )
}
