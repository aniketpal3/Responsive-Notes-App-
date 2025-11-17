import { format } from 'date-fns'

export function formatDate(iso) {
  try {
    return format(new Date(iso), 'MMM d, yyyy — hh:mm a')
  } catch (err) {
    return iso
  }
}
