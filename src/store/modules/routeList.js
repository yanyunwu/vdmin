export default {
  state: () => ({
    routeList: [
      {
        path: "/homepage",
        name: "homepage",
        component: "/HomePage/Home.vue",
        meta: {
          title: "首页",
          layout: "basepages",
          isHide: false,
          isKeepAlive: false,
          icon: " mdi-home"
        }
      },
      {
        meta: {
          title: "账户管理",
          isHide: false,
          isKeepAlive: false,
          icon: "mdi-account-edit-outline"
        },
        children: [
          {
            path: "/AccountList",
            name: "AccountList",
            component: "/AccountList",
            meta: {
              title: "账户列表",
              layout: "basepages",
              isHide: false,
              isKeepAlive: false,
              icon: "mdi-account-edit-outline"
            }
          },
          {
            path: "/RolesList",
            name: "RolesList",
            component: "/RolesList",
            meta: {
              title: "角色列表",
              layout: "basepages",
              isHide: false,
              isKeepAlive: false,
              icon: "mdi-account-edit-outline"
            }
          }
        ]
      },
      {
        meta: {
          title: "服务商管理",
          isHide: false,
          isKeepAlive: false,
          icon: "mdi-bike"
        },
        children: [
          {
            path: "/providerList",
            name: "providerList",
            component: "/ProviderList",
            meta: {
              title: "服务商详情",
              layout: "basepages",
              isHide: false,
              isKeepAlive: false,
              icon: "mdi-bike"
            }
          }
        ]
      },
      {
        meta: {
          title: "商品管理",
          isHide: false,
          isKeepAlive: false,
          icon: "mdi-dots-grid"
        },
        children: [
          {
            path: "/commodityadd",
            name: "commodityadd",
            component: "/CommodityAdd/index.vue",
            meta: {
              title: "商品浏览",
              layout: "basepages",
              isHide: false,
              isKeepAlive: false,
              icon: "mdi-plus-thick"
            }
          },
          {
            path: "/commoditylist",
            name: "commoditylist",
            component: "/CommodityList/index.vue",
            meta: {
              title: "商品列表",
              layout: "basepages",
              isHide: false,
              isKeepAlive: false,
              icon: "mdi-clipboard-list-outline"
            }
          },
          {
            path: "/CommodityRecycle",
            name: "CommodityRecycle",
            component: "/CommodityRecycle",
            meta: {
              title: "回收站",
              layout: "basepages",
              isHide: false,
              isKeepAlive: false,
              icon: "mdi-dots-grid"
            }
          }
        ]
      },
      {
        meta: {
          title: "订单管理",
          isHide: false,
          isKeepAlive: false,
          icon: "mdi-clipboard-text-outline"
        },
        children: [
          {
            path: "/purchaseOrder",
            name: "purchaseOrder",
            component: "/Order/index.vue",
            meta: {
              title: "采购订单",
              layout: "basepages",
              isHide: false,
              isKeepAlive: false,
              icon: "mdi-file-document-outline"
            }
          },
          {
            path: "/UserOrder",
            name: "UserOrder",
            component: "/UserOrder/index.vue",
            meta: {
              title: "用户订单",
              layout: "basepages",
              isHide: false,
              isKeepAlive: false,
              icon: "mdi-clipboard-account-outline"
            }
          }
        ]
      },
      {
        meta: {
          title: "设备管理",
          isHide: false,
          isKeepAlive: false,
          icon: "mdi-cart-outline"
        },
        children: [
          {
            path: "/deviceHome",
            name: "deviceHome",
            component: "/DeviceHome",
            meta: {
              title: "用户设备",
              layout: "basepages",
              isHide: false,
              isKeepAlive: false,
              icon: "mdi-cart-outline"
            }
          },
          {
            path: "/deviceGrow",
            name: "deviceGrow",
            component: "/DeviceGrow",
            meta: {
              title: "育苗设备",
              layout: "basepages",
              isHide: false,
              isKeepAlive: false,
              icon: "mdi-cart-outline"
            }
          }
        ]
      },
      {
        meta: {
          title: "我的",
          isHide: false,
          isKeepAlive: false,
          icon: "mdi-account-circle"
        },
        children: [
          {
            path: "/financeinfo",
            name: "financeinfo",
            component: "/FinanceInfo",
            meta: {
              title: "财务信息",
              layout: "basepages",
              isHide: false,
              isKeepAlive: false,
              icon: "mdi-currency-usd"
            }
          },
          {
            path: "/syslog",
            name: "syslog",
            component: "/SysLog",
            meta: {
              title: "日志",
              layout: "basepages",
              isHide: false,
              isKeepAlive: false,
              icon: "mdi-note-text"
            }
          },
          {
            path: "/about",
            name: "about",
            component: "/About",
            meta: {
              title: "关于我们",
              layout: "basepages",
              isHide: false,
              isKeepAlive: false,
              icon: "mdi-information-variant"
            }
          }
        ]
      },
      {
        meta: {
          title: "其他",
          isHide: false,
          isKeepAlive: false,
          icon: "mdi-checkbox-multiple-blank-outline"
        },
        children: [
          {
            path: "/sysback",
            name: "sysback",
            component: "/Sysback",
            meta: {
              title: "系统反馈",
              layout: "basepages",
              isHide: false,
              isKeepAlive: false,
              icon: "mdi-message-alert"
            }
          }
        ]
      },
      {
        path: "/platformuser",
        name: "platformuser",
        component: "/PlatformUser",
        meta: {
          title: "个人信息",
          layout: "basepages",
          isHide: true,
          isKeepAlive: false,
          icon: ""
        }
      }
    ]
  })
};
