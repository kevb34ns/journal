class EntriesController < ApplicationController

  def create
    @entry = current_user.entries.build file_id: params[:file_id],
                                        picture: params[:picture]
    if @entry.save
      # send response with new entry info as JSON
      respond_to do |format|
        format.html { redirect_to current_user }
        format.json { render :json => @entry }
      end
    else
      # TODO flash error
    end
  end

  def update
  end

  def destroy
  end
end
