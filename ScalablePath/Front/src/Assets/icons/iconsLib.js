import {
  faAngleDown,
  faAngleUp,
  faArrowLeft,
  faArrowRight,
  faBan,
  faBoxes,
  faCalendarAlt,
  faCalendarCheck,
  faCheck,
  faClock,
  faCog,
  faDollarSign,
  faEdit,
  faEllipsisH,
  faEllipsisV,
  faFileAlt,
  faFileSignature,
  faHandHoldingUsd,
  faIdBadge,
  faListUl,
  faLock,
  faLockOpen,
  faMapMarkerAlt,
  faMinus,
  faMoneyBillWave,
  faPhoneAlt,
  faPlus,
  faReceipt,
  faSearchDollar,
  faStopwatch,
  faStore,
  faTimes,
  faTrash,
  faTruckLoading,
  faUser
} from '@fortawesome/free-solid-svg-icons'

export const menuIcons = {
  STORE: faStore,
  LIST: faListUl,
  PRODUCT: faBoxes,
  PROMOTION: faSearchDollar,
  COUPOM: faReceipt,
  ACCOUNT: faIdBadge,
  CONFIGURATIONS: faCog,
}

export const generalIcons = {
  MANAGER: faIdBadge,
  ADDRESS: faMapMarkerAlt,
  DELIVERY_FEE: faHandHoldingUsd,
  DELIVERY_TYPE: faTruckLoading,
  PAYMENT_TYPE: faMoneyBillWave,

  ARROW_DOWN: faAngleDown,
  ARROW_UP: faAngleUp,
  CLOCK: faClock,
  ARROW_RIGHT: faArrowRight,
  ARROW_LEFT: faArrowLeft,
  CHECKMARK: faCheck,
  USER: faUser,
  PHONE: faPhoneAlt,

  CLOSE: faTimes,

  PRICE: faDollarSign,

  OPENED: faLockOpen,
  CLOSED: faLock,

  ADD: faPlus,
  REMOVE: faMinus,

  DESCRIPTION: faFileAlt,
  TRASH: faTrash,
  CALENDAR: faCalendarAlt,
  CALENDAR_CHECK: faCalendarCheck,

  HORIZONTAL_DOTS: faEllipsisH,
  VERTICAL_DOTS: faEllipsisV,

  CONDITIONS: faFileSignature,

  COUNTER: faStopwatch,
}

export const entityMenuIcons = {
  edit: faEdit,
}

export const groupedIcons = {
  ...menuIcons,
  ...generalIcons,
  ...entityMenuIcons,
}

// export const customIcons = new Set([paymentMethods.PIX])

// export const attributesWithoutQuantity = new Set([attributes.SIZES])

export const getIcon = (iconName) => groupedIcons[iconName] || faBan

// -----
// -----
// TOOLTIPS:

export const tooltips = {
  'credit-card': 'Cartão de crédito',
  'dollar-sign': 'Dinheiro',
  times: 'Fechar',

  edit: 'Editar',

  truck: 'Delivery',
  hands: 'Retirada',
  store: 'Consumo no local',
  // [paymentMethods.PIX]: 'Pix',
  trash: 'Deletar',

  utensils: 'Comida',
  'glass-whiskey': 'Bebida',
  'wine-glass-alt': 'Bebida Alcoolica',
  'ellipsis-v': 'Opções',
  'ellipsis-h': 'Opções',

  'money-bill': 'Valor',
  'calendar-minus': 'Data',
  'stopwatch-20': 'Usos',
  'tachometer-alt': 'Distância',
}
