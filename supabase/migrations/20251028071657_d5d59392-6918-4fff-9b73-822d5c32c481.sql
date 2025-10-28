-- Add availability_status column to course_schedules table
ALTER TABLE course_schedules ADD COLUMN IF NOT EXISTS availability_status TEXT NOT NULL DEFAULT 'open';

-- Add check constraint for availability_status
ALTER TABLE course_schedules ADD CONSTRAINT check_availability_status 
CHECK (availability_status IN ('open', 'closed'));