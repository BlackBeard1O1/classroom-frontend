export const DEPARTMENTS = [
    'Computer Science',
    'Mathematics',
    'Physics',
]

export const DEPARTMENT_OPTIONS = DEPARTMENTS.map(dept => ({
    label: dept,
    value: dept.toLowerCase().replace(/\s+/g, '-')
}))