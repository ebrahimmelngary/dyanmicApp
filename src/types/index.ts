export interface RootConfig {
    home: string
    pages: Page[]
  }

  export interface Page {
    name: string
    title: string
    content: Content
  }

  export interface Content {
    type: string
    props: Props
    children: Children[]
  }

  export interface Props {
    style: Style
  }

  export interface Style {
    flex: number
    padding: number
  }

  export interface Children {
    type: string
    props: Props2
    children?: Children2[]
  }

  export interface Props2 {
    style?: Style2
    placeholder?: string
    stateKey?: string
    text?: string
    data?: Daum[]
    renderItem?: RenderItem
    title?: string
    navigateTo?: string
  }

  export interface Style2 {
    fontSize?: number
    fontWeight?: string
    flexDirection?: string
    justifyContent?: string
    marginBottom?: number
  }

  export interface Daum {
    id: string
    name: string
  }

  export interface RenderItem {
    type: string
    props: Props3
  }

  export interface Props3 {
    text: string
    onPress: string
  }

  export interface Children2 {
    type: string
    props: Props4
  }

  export interface Props4 {
    title?: string
    onPress?: string
    text?: string
    style?: Style3
    navigateTo?: string
  }

  export interface Style3 {
    fontSize: number
    color?: string
    fontWeight?: string
  }
