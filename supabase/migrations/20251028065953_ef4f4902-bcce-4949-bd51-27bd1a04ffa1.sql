-- Create course_schedules table for managing course events
CREATE TABLE public.course_schedules (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  course_type TEXT NOT NULL, -- e.g., 'ISO9001', 'ISO14001', etc.
  location TEXT NOT NULL,
  method TEXT NOT NULL, -- 'PHYSICAL', 'ONLINE REMOTE', etc.
  duration INTEGER NOT NULL DEFAULT 1, -- in days
  start_date DATE NOT NULL,
  end_date DATE NOT NULL,
  fee DECIMAL(10, 2) NOT NULL,
  status TEXT NOT NULL DEFAULT 'published',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.course_schedules ENABLE ROW LEVEL SECURITY;

-- Create policies for course_schedules
CREATE POLICY "Everyone can view published schedules"
ON public.course_schedules
FOR SELECT
USING (status = 'published');

CREATE POLICY "Admins can insert schedules"
ON public.course_schedules
FOR INSERT
WITH CHECK (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can update schedules"
ON public.course_schedules
FOR UPDATE
USING (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can delete schedules"
ON public.course_schedules
FOR DELETE
USING (has_role(auth.uid(), 'admin'::app_role));

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_course_schedules_updated_at
BEFORE UPDATE ON public.course_schedules
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();