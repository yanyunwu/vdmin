import request from "@/utils/request.js";

let routeList = [
  {
    path: "/home",
    component: "home",
    meta: {
      title: "首页",
      layout: "base-layout",
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
        component: "",
        meta: {
          title: "账户列表",
          isHide: false,
          isKeepAlive: false,
          icon: "mdi-account-edit-outline"
        }
      },
      {
        path: "/RolesList",
        component: "",
        meta: {
          title: "角色列表",
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
        component: "",
        meta: {
          title: "服务商详情",

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
        component: "",
        meta: {
          title: "商品浏览",

          isHide: false,
          isKeepAlive: false,
          icon: "mdi-plus-thick"
        }
      },
      {
        path: "/commoditylist",
        component: "",
        meta: {
          title: "商品列表",

          isHide: false,
          isKeepAlive: false,
          icon: "mdi-clipboard-list-outline"
        }
      },
      {
        path: "/CommodityRecycle",
        component: "",
        meta: {
          title: "回收站",

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
        component: "",
        meta: {
          title: "采购订单",

          isHide: false,
          isKeepAlive: false,
          icon: "mdi-file-document-outline"
        }
      },
      {
        path: "/UserOrder",
        component: "",
        meta: {
          title: "用户订单",

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
        component: "",
        meta: {
          title: "用户设备",

          isHide: false,
          isKeepAlive: false,
          icon: "mdi-cart-outline"
        }
      },
      {
        path: "/deviceGrow",
        component: "",
        meta: {
          title: "育苗设备",

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
        component: "",
        meta: {
          title: "财务信息",

          isHide: false,
          isKeepAlive: false,
          icon: "mdi-currency-usd"
        }
      },
      {
        path: "/syslog",
        component: "",
        meta: {
          title: "日志",

          isHide: false,
          isKeepAlive: false,
          icon: "mdi-note-text"
        }
      },
      {
        path: "/about",
        component: "",
        meta: {
          title: "关于我们",

          isHide: false,
          isKeepAlive: false,
          icon: "mdi-information-variant"
        }
      }
    ]
  },
  {
    meta: {
      title: "系统设置",
      isHide: false,
      isKeepAlive: false,
      icon: "mdi-checkbox-multiple-blank-outline"
    },
    children: [
      {
        path: "/sys/menu",
        name: "menu",
        component: "system/menu",
        meta: {
          title: "菜单设置",
          layout: "base-layout",
          isHide: false,
          isKeepAlive: false,
          icon: "mdi-message-alert"
        }
      }
    ]
  },
  {
    path: "/platformuser",
    component: "",
    meta: {
      title: "个人信息",

      isHide: true,
      isKeepAlive: false,
      icon: ""
    }
  }
];

export function getRoutes() {
  // return request({
  //   url: "/routes",
  //   method: "get"
  // });
  return Promise.resolve(routeList);
}
