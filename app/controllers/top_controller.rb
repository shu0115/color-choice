# coding: utf-8
class TopController < ApplicationController
  # トップ
  def index
  end

  # 色保存
  def color_save( color )
    color = Color.new( color )
    color.save!

    redirect_to top_color_list_path
  end

  # 色リスト
  def color_list
    @colors = Color.order( "created_at DESC" ).all
  end
end
