export class CookiesController {
  static getCookie(name: string): string | null {
    const value = `; ${document.cookie}`
    const parts = value.split(`; ${name}=`)
    if (parts.length === 2) {
      const cookieValue = parts.pop()?.split(';').shift()
      return cookieValue ? decodeURIComponent(cookieValue) : null
    }
    return null
  }

  static setCookie(
    name: string,
    value: string,
    options: {
      expires?: Date | string
      path?: string
      domain?: string
      secure?: boolean
      sameSite?: 'Strict' | 'Lax' | 'None'
    } = {},
  ): void {
    let cookieString = `${name}=${encodeURIComponent(value)}`

    if (options.expires) {
      if (options.expires instanceof Date) {
        cookieString += `; expires=${options.expires.toUTCString()}`
      } else {
        cookieString += `; expires=${options.expires}`
      }
    }

    if (options.path) {
      cookieString += `; path=${options.path}`
    }

    if (options.domain) {
      cookieString += `; domain=${options.domain}`
    }

    if (options.secure) {
      cookieString += `; secure`
    }

    if (options.sameSite) {
      cookieString += `; samesite=${options.sameSite}`
    }

    document.cookie = cookieString
  }

  static removeCookie(name: string, path?: string, domain?: string): void {
    this.setCookie(name, '', {
      expires: new Date(0),
      path: path,
      domain: domain,
    })
  }
}
