-- Allow authenticated users to update submissions (mark as read)
CREATE POLICY "Authenticated users can update submissions"
ON public.contact_submissions
FOR UPDATE
USING (auth.uid() IS NOT NULL)
WITH CHECK (auth.uid() IS NOT NULL);